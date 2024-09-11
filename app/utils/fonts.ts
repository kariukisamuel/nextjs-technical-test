import { Montserrat, Roboto } from "next/font/google"

export const montserrat_init = Montserrat({
    variable: '--font-montserrat',
    weight: '700'
});
export const roboto_init = Roboto({
    variable: '--font-roboto',
    weight: '300'
})

export const montserrat = montserrat_init.variable;
export const roboto = roboto_init.variable;