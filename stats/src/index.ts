import { AverageGoalsAnalysis } from './analyzers/AverageGoalsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new AverageGoalsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
