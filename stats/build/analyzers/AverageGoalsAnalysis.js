"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = void 0;
class AverageGoalsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let games = 0;
        let goals = 0;
        for (let match of matches) {
            if (match[1] === this.team) {
                games++;
                goals += match[3];
            }
            else if (match[2] === this.team) {
                games++;
                goals += match[4];
            }
        }
        const average = (goals / games).toFixed(2);
        return `Team ${this.team} got ${average} on average.`;
    }
}
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;
