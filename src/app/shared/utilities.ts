export class LocalStorageFunctions {
  static loadFromLocalStorege<T>(key: string): Record<string, T> {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  }

  static saveToLocalStorage<T>(key: string, data: Record<string, T>): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
