export class Salaire {

    private _salaireMinBrut:number;
    private _salaireMaxBrut:number;
    private _salaireMinNet:number;
    private _salaireMaxNet:number;


    get salaireMinBrut(): number {
        return this._salaireMinBrut;
    }

    set salaireMinBrut(value: number) {
        this._salaireMinBrut = value;
    }

    get salaireMaxBrut(): number {
        return this._salaireMaxBrut;
    }

    set salaireMaxBrut(value: number) {
        this._salaireMaxBrut = value;
    }

    get salaireMinNet(): number {
        return this._salaireMinNet;
    }

    set salaireMinNet(value: number) {
        this._salaireMinNet = value;
    }

    get salaireMaxNet(): number {
        return this._salaireMaxNet;
    }

    set salaireMaxNet(value: number) {
        this._salaireMaxNet = value;
    }
}