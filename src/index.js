// @autor Karunaaharan Bavaram (Package owns by bavaram)

import AesEncryption from "./AesEncryption";

class LocalStorageService {
  ls = window.localStorage

  setItem(key, value,encrypt_key = "KarunaaharanBavaram") {
    value = JSON.stringify(value);
    this.ls.setItem(key, AesEncryption.encrypt(value,encrypt_key))
    return true
  }

  getItem(key,encrypt_key = "KarunaaharanBavaram") {
    let value = this.ls.getItem(key)
    try {
      return JSON.parse(AesEncryption.decrypt(key,encrypt_key))
    } catch (e) {
      return e;
    }
  }

}

export default new LocalStorageService();
