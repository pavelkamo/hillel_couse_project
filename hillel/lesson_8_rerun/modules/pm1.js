import {Employee1} from './employee1.js';

export class Pm1 extends Employee1 {
    #jobType = 'Pm1';

    getJobType() {
        return `I am a ${this.#jobType}`;
    }
}