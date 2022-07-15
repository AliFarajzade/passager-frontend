export const getNearestDate = (dates: string[]) =>
    dates.filter(date => new Date(date).getTime() - Date.now() > 0).sort()[0]

export const nextMonth = (): Date => {
    const now = new Date()
    if (now.getMonth() === 11) return new Date(now.getFullYear() + 1, 0, 1)
    else return new Date(now.getFullYear(), now.getMonth() + 1, 1)
}
