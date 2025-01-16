export interface Movie {
    id?: number
    title: string
    description: string,
    posterPath: string,
    count: number
}

export type Movies = Movie[]

export const initialValue: Movies = []