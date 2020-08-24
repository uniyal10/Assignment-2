import client from "../db"
import { ResolveOptions } from "dns"

export class User {
  constructor(public id: string, public firstName: string, public middleName: string, public lastName: string, public email: string, public phoneNumber: string, public role: string, public address: string) {}

  public static getAllUsers() {
    return new Promise((resolve, reject) => {
      client.query("SELECT * FROM  users", (err: Error, data) => {
        if (err) reject(err)
        else {
          resolve(data)
        }
      })
    })
  }
}
