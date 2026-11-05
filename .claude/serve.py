"""Server lokal untuk pengembangan: sama seperti `python -m http.server`, tapi mengirim
Cache-Control: no-store supaya browser selalu memuat file JS/CSS terbaru setiap reload
(http.server bawaan tidak mengirim header cache, sehingga modul ES bisa tertahan di cache)."""
import http.server
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    http.server.ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()
