"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv-safe/config");
function main() {
    let app = express_1.default();
    app.use("/", (_, res) => {
        res.send("hello world!1");
    });
    console.log(process.env.PORT);
    app.listen(8080, () => {
        console.log("server started on localhost:4000");
    });
}
main();
//# sourceMappingURL=index.js.map