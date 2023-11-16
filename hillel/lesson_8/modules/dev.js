import { Employee } from './employee.js';

export class Dev extends Employee {
  #jobType = 'Dev';

  getJobType() {
    return `I am a ${this.#jobType}`;
  }

  static returnArrayOfDevs(...objects) {
    const devArray = [];
    for (const obj of objects) {
      if (obj instanceof Dev) {
        devArray.push(obj);
      }
    }
    return devArray;
  }
}