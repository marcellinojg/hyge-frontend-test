
const ROUTES = {
    STATIC: {
        'LANDING': '/',
        'PORTFOLIOS': '/portfolios',
    },
    DYNAMIC: {
        'PORTFOLIOS': (id : string) => `/portfolios/${id}` 
    },
}

export default ROUTES