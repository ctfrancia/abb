export interface Measurement {
    part: string, // Produced piece
    feature: string, // "Seam", "Slot", or "Hole"
    control: Control, 
}

interface Control {
    x: MetaData,
    y: MetaData,
    z: MetaData,
    length: string,
    diameter: string,
}

interface MetaData {
    dev: string,
    devOutTotal: string,
    status: string, // ok, caution, error

}