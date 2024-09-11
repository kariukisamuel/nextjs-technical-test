import { Montserrat, Roboto } from "next/font/google"

export const montserrat_init = Montserrat({
    variable: '--font-montserrat',
    weight: '700',
    subsets:['latin']
});
export const roboto_init = Roboto({
    variable: '--font-roboto',
    weight: '300',
    subsets:['latin']
})

export const montserrat = montserrat_init.variable;
export const roboto = roboto_init.variable;