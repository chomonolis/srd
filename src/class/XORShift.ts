class XORShift {
  private x = 123456789;
  private y = 362436069;
  private z = 521288629;
  private w = 0;
  private seed = 0;
  private count = 0;

  constructor(seed: number) {
    this.w = seed;
    this.seed = seed;
    this.count = 0;
  }

  next() {
    this.count++;
    const t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    return Math.abs((this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8))));
  }

  modNext(mod: number) {
    if (mod === 0) {
      return 0;
    }
    return this.next() % mod;
  }

  getSeed() {
    return this.seed;
  }
  getCount() {
    return this.count;
  }
}

export default XORShift;
