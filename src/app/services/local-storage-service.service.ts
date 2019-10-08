export class LocalStorageService {

  constructor() {
    console.log('Init LocalStorageService');
  }

  handleSet(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getSet(key: string) {
    localStorage.getItem(key);
  }

  deleteSet(key: string) {
    localStorage.removeItem(key);
  }
}
