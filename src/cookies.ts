import { Request, Express } from 'express';

const cookieExtractor = (req: Request) => {
    let token = '';
    if (req && req.cookies) {
        token = req.cookies.token;
    }
    return token;
};

// jwt session
// xss csrf
const handleCookies = (app: Express) => {
    app.get('/login', (req, res) => {
        const minute = 60000;
        res.cookie('token', '123', {
            httpOnly: true,
            // secure: true,
            maxAge: minute,
            // sameSite: 'strict', // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        });
        res.send();
    });

    app.get('/signup', (req, res) => {
        res.clearCookie('token');
        res.redirect('/');
    });

    app.get('/token', (req, res) => {
        res.send(`token: ${cookieExtractor(req)}`);
    });
};

export default handleCookies;
