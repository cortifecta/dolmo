type IncomeRecord = Record<string, number>;

class IncomeManager {
  private income: IncomeRecord;

  constructor() {
    this.income = {};
  }

  // Adds or updates income for a given source
  public setIncome(source: string, amount: number): void {
    this.income[source] = amount;
  }

  // Retrieves the income amount for a given source
  public getIncome(source: string): number {
    return this.income[source] ?? 0;
  }

  // Removes an income source
  public removeIncome(source: string): void {
    delete this.income[source];
  }

  // Calculates total income from all sources
  public calculateTotalIncome(): number {
    return Object.values(this.income).reduce((total, amount) => total + amount, 0);
  }
}

// Usage
const incomeManager = new IncomeManager();
incomeManager.setIncome('Job', 50000);
incomeManager.setIncome('Investments', 20000);
// Total income would be 70000
console.log(`Total Income: ${incomeManager.calculateTotalIncome()}`);
