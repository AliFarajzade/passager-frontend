export const getNearestDate = (dates: string[]) =>
    dates.filter(date => new Date(date).getTime() - Date.now() > 0).sort()[0]
