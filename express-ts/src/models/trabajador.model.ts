enum Rol {
    BACK = 'backend',
    FRONT = 'frontend',
    DESIGN = 'diseño',
    OTRO = 'otro'
}

enum Seniority {
    JUNIOR = 'junior',
    SEMISENIOR = 'semisenior',
    SENIOR = 'senior'
}

export interface Trabajador {
    nombre : string;
    rol : Rol;
    seniority :  Seniority;
}
