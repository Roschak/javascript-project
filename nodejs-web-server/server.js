import http from 'http';

const requestListener = (request, response) => {
    // Pengaturan standar Header agar client tahu kita mengirim HTML
    response.setHeader('content-type', 'text/html');
    
    // Secara default kita set 200, nanti akan diubah di dalam logika jika perlu
    response.statusCode = 200;

    const { method, url } = request;

    // ==========================================
    // SEKSI 2: LOGIKA ROUTING & STATUS CODE
    // ==========================================

    // Start Jalur Homepage ('/')
    // Cara eksekusi: curl -X GET http://localhost:5000/ -i
    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200; // OK
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400; // Bad Request
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } 
    // End Jalur Homepage
    
    // Start Jalur About ('/about')
    /*
    else if (url === '/about') {
        
        / Sub-Blok: GET About
        / Cara eksekusi: curl -X GET http://localhost:5000/about -i
        if (method === 'GET') {
            response.statusCode = 200; / OK
            response.end('<h1>Halo! Ini adalah halaman about</h1>');
        } 
        
        / Sub-Blok: POST About (Mengolah Body Request)
        / Cara eksekusi: curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}" -i
        else if (method === 'POST') {
            let body = [];

            / Proses pengambilan data (Stream)
            request.on('data', (chunk) => {
                body.push(chunk);
            });

            / Proses akhir setelah data terkumpul
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                
                / Mengubah JSON string menjadi objek JavaScript
                const { name } = JSON.parse(body);
                
                response.statusCode = 200; / OK
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } 
        
        / Sub-Blok: Method Lain di About
        else {
            response.statusCode = 400; / Bad Request
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } 
    */
    // End Jalur About
    
    // Start Jalur 404 (URL Tidak Ditemukan)
    /*
    else {
        response.statusCode = 404; / Not Found
        / Cara eksekusi: curl -X GET http://localhost:5000/jalur-ngasal -i
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
    */
    // End Jalur 404


    // ==========================================
    // SEKSI SEJARAH: LOGIKA ROUTING REQUEST (VERSI LAMA)
    // ==========================================
    // start routing request
    /*
    / 1. Jika client mengakses halaman utama ('/')
    if (url === '/') {
        if (method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } 
    / 2. Jika client mengakses halaman tentang ('/about')
    else if (url === '/about') {
        if (method === 'GET') {
            response.end('<h1>Halo! Ini adalah halaman about</h1>');
        } 
        else if (method === 'POST') {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } 
        else {
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } 
    else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
    */
    // end routing request


    // ==========================================
    // SEKSI SEJARAH: BODY REQUEST (VERSI LAMA)
    // ==========================================
    // start Body Request
    /*
    if (method === 'GET') {
        response.end('<h1>terimakasih!</h1>')
    }
    
    if (method === 'POST') {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        })
        
        request.on('end', () => {
            body = Buffer.concat(body).toString() 
            const {name : userName} = JSON.parse(body);
            response.end(`<h1>hola, ${userName}!</h1>`)
        })
    }
    */
    // end Body Request


    // ==========================================
    // SEKSI SEJARAH: METHOD DASAR (VERSI LAMA)
    // ==========================================
    // start
    /*
    if(method === "GET") {
        / Cara eksekusi: curl -X GET http://localhost:5000/
        response.end('<h1>Terimakasih!</h1>')
    }
    if (method === 'POST') {
        / Cara eksekusi: curl -X POST http://localhost:5000/
        response.end('<h1>ini buat kamu!</h1>')
    }
    if (method === 'PUT') {
        / Cara eksekusi: curl -X PUT http://localhost:5000/
        response.end('<h1>ditaruh di sini ya!</h1>')
    }
    if (method === 'DELETE') {
        / Cara eksekusi: curl -X DELETE http://localhost:5000/
        response.end('<h1>yau dah kalau gak mau aku buang!</h1>')
    }
    */
    // end

    // start
    // menggunkan properti method dari request
    /*
    / const { method } = request;
    / response.setHeader('Content-Type', 'text/html');
    / response.statusCode = 200;
    / response.end('<h1>Halo HTTP Server!</h1>');
    */
    // end
};

// ==========================================
// SEKSI PEMASANGAN SERVER
// ==========================================

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    // Cara jalankan server: npm run start
    console.log(`Server berjalan pada http://${host}:${port}`);
});
// End Konfigurasi Server