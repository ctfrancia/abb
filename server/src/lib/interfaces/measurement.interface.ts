export interface Measurement {
    part: string, // Produced piece
    feature: string, // "Seam", "Slot", or "Hole"
    control: Control, 
}

interface Control {
    x: string,
    y: string,
    z: string,
    length: string,
    diameter: string,
}