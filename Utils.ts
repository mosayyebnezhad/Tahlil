export const RandExp = (lambda: number): number => {
    const random = Math.random();
    return -Math.log(random) * lambda;
}