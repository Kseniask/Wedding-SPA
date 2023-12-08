class FlipDown {
  private initialised: boolean;
  private now: number;
  private epoch: number;
  private countdownEnded: boolean;
  private hasEndedCallback: (() => void) | null;
  private element: HTMLElement | null;
  private rotors: HTMLElement[];
  private rotorLeafFront: HTMLElement[];
  private rotorLeafRear: HTMLElement[];
  private rotorTop: HTMLElement[];
  private rotorBottom: HTMLElement[];
  private countdown: NodeJS.Timeout | null;
  private daysRemaining: number;
  private clockValues: Record<string, number>;
  private clockStrings: Record<string, string>;
  private clockValuesAsString: string[];
  private prevClockValuesAsString: string[];
  private opts: { theme: string; headings: string[] };

  constructor(uts: number, el: string | HTMLElement = "flipdown", opt: any = {}) {
    if (typeof uts !== "number") {
      throw new Error(`FlipDown: Constructor expected unix timestamp, got ${typeof uts} instead.`);
    }

    if (typeof el === "object") {
      opt = el;
      el = "flipdown";
    }

    this.initialised = false;
    this.now = this._getTime();
    this.epoch = uts;
    this.countdownEnded = false;
    this.hasEndedCallback = null;
    this.element = document.getElementById(el);
    this.rotors = [];
    this.rotorLeafFront = [];
    this.rotorLeafRear = [];
    this.rotorTop = [];
    this.rotorBottom = [];
    this.countdown = null;
    this.daysRemaining = 0;
    this.clockValues = {};
    this.clockStrings = {};
    this.clockValuesAsString = [];
    this.prevClockValuesAsString = [];
    this.opts = this._parseOptions(opt);

    this._setOptions();
  }

  start(): this {
    console.log('this.initialised',this.initialised);
    
    if (!this.initialised) {
      this.initialised = true;
      this._init();
    }
    this.countdown = setInterval(this._tick.bind(this), 1000);
    return this;
  }

  ifEnded(cb: () => void): this {
    this.hasEndedCallback = () => {
      cb();
      this.hasEndedCallback = null;
    };

    return this;
  }

  private _getTime(): number {
    return new Date().getTime() / 1000;
  }

  private _hasCountdownEnded(): boolean {
    if (this.epoch - this.now < 0) {
      this.countdownEnded = true;

      if (this.hasEndedCallback != null) {
        this.hasEndedCallback();
        this.hasEndedCallback = null;
      }

      return true;
    } else {
      this.countdownEnded = false;
      return false;
    }
  }

  private _parseOptions(opt: any): { theme: string; headings: string[] } {
    let headings = ["Days", "Hours", "Minutes", "Seconds"];

    if (opt.headings && opt.headings.length === 4) {
      headings = opt.headings;
    }

    return {
      theme: opt.hasOwnProperty("theme") ? opt.theme : "dark",
      headings: headings,
    };
  }

  private _setOptions(): void {
    if (this.element) {
      this.element.classList.add(`flipdown__theme-${this.opts.theme}`);
    }
  }

  private _init(): this {
    console.log('init called');
    
    this.initialised = true;

    console.log('this.init', this.initialised);
    
    if (this._hasCountdownEnded()) {
      this.daysRemaining = 0;
    } else {
      this.daysRemaining = Math.floor((this.epoch - this.now) / 86400).toString().length;
    }

    const dayRotorCount = this.daysRemaining <= 2 ? 2 : this.daysRemaining;

    for (let i = 0; i < dayRotorCount + 6; i++) {
      this.rotors.push(this._createRotor(0));
    }

    const dayRotors: HTMLElement[] = [];

    for (let i = 0; i < dayRotorCount; i++) {
      dayRotors.push(this.rotors[i]);
    }

    if (this.element) {
      this.element.appendChild(this._createRotorGroup(dayRotors, 0));
    }

    let count = dayRotorCount;
    
    for (let i = 0; i < 3; i++) {
      const otherRotors: HTMLElement[] = [];

      for (let j = 0; j < 2; j++) {
        otherRotors.push(this.rotors[count]);
        count++;
      }

      if (this.element) {
        this.element.appendChild(this._createRotorGroup(otherRotors, i + 1));
      }
    }

    if (this.element) {
      this.rotorLeafFront = Array.from(this.element.getElementsByClassName("rotor-leaf-front")) as HTMLElement[];
      this.rotorLeafRear = Array.from(this.element.getElementsByClassName("rotor-leaf-rear")) as HTMLElement[];
      this.rotorTop = Array.from(this.element.getElementsByClassName("rotor-top"))as HTMLElement[];
      this.rotorBottom = Array.from(this.element.getElementsByClassName("rotor-bottom")) as HTMLElement[];
    }

    this._tick();
    this._updateClockValues(true);

    return this;
  }

  private _createRotorGroup(rotors: HTMLElement[], rotorIndex: number): HTMLElement {
    const rotorGroup = document.createElement("div");
    rotorGroup.className = "rotor-group";
    const dayRotorGroupHeading = document.createElement("div");
    dayRotorGroupHeading.className = "rotor-group-heading";
    dayRotorGroupHeading.setAttribute("data-before", this.opts.headings[rotorIndex]);
    rotorGroup.appendChild(dayRotorGroupHeading);
    appendChildren(rotorGroup, rotors);
    return rotorGroup;
  }

  private _createRotor(v: number = 0): HTMLElement {
    const rotor = document.createElement("div");
    const rotorLeaf = document.createElement("div");
    const rotorLeafRear = document.createElement("figure");
    const rotorLeafFront = document.createElement("figure");
    const rotorTop = document.createElement("div");
    const rotorBottom = document.createElement("div");
    rotor.className = "rotor";
    rotorLeaf.className = "rotor-leaf";
    rotorLeafRear.className = "rotor-leaf-rear";
    rotorLeafFront.className = "rotor-leaf-front";
    rotorTop.className = "rotor-top";
    rotorBottom.className = "rotor-bottom";
    rotorLeafRear.textContent = v.toString();
    rotorTop.textContent = v.toString();
    rotorBottom.textContent = v.toString();
    appendChildren(rotor, [rotorLeaf, rotorTop, rotorBottom]);
    appendChildren(rotorLeaf, [rotorLeafRear, rotorLeafFront]);
    return rotor;
  }

  private _tick(): void {
    this.now = this._getTime();
    let diff = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;
    this.clockValues.d = Math.floor(diff / 86400);
    diff -= this.clockValues.d * 86400;
    this.clockValues.h = Math.floor(diff / 3600);
    diff -= this.clockValues.h * 3600;
    this.clockValues.m = Math.floor(diff / 60);
    diff -= this.clockValues.m * 60;
    this.clockValues.s = Math.floor(diff);

    this._updateClockValues();

    this._hasCountdownEnded();
  }

  private _updateClockValues(init: boolean = false): void {
    this.clockStrings.d = pad(this.clockValues.d, 2);
    this.clockStrings.h = pad(this.clockValues.h, 2);
    this.clockStrings.m = pad(this.clockValues.m, 2);
    this.clockStrings.s = pad(this.clockValues.s, 2);
    this.clockValuesAsString = (this.clockStrings.d + this.clockStrings.h + this.clockStrings.m + this.clockStrings.s).split("");
    this.rotorLeafFront.forEach((el, i) => {
      el.textContent = this.prevClockValuesAsString[i];
    });
    this.rotorBottom.forEach((el, i) => {
      el.textContent = this.prevClockValuesAsString[i];
    });

    const rotorTopFlip = () => {
      this.rotorTop.forEach((el, i) => {
        if (el.textContent !== this.clockValuesAsString[i]) {
          el.textContent = this.clockValuesAsString[i];
        }
      });
    };

    const rotorLeafRearFlip = () => {
      this.rotorLeafRear.forEach((el, i) => {
        if (el.textContent !== this.clockValuesAsString[i]) {
          el.textContent = this.clockValuesAsString[i];
          el.parentElement?.classList.add("flipped");
          const flip = setInterval(() => {
            el.parentElement?.classList.remove("flipped");
            clearInterval(flip);
          }, 500);
        }
      });
    };

    if (!init) {
      setTimeout(rotorTopFlip.bind(this), 500);
      setTimeout(rotorLeafRearFlip.bind(this), 500);
    } else {
      rotorTopFlip.call(this);
      rotorLeafRearFlip.call(this);
    }

    this.prevClockValuesAsString = this.clockValuesAsString;
  }

  private _createClass(instance: any, Constructor: any): void {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
}

function pad(n: number, len: number): string {
  let result = n.toString();

  while (result.length < len) {
    result = "0" + result;
  }

  return result;
}

function appendChildren(parent: HTMLElement, children: HTMLElement[]): void {
  children.forEach((el) => {
    parent.appendChild(el);
  });
}

export default FlipDown;
