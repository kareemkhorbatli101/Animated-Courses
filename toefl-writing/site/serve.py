#!/usr/bin/env python3
"""Serve this folder on localhost, for browsers that refuse local files.

Not needed in the normal case: open index.html directly.
"""
import http.server
import os
import socketserver
import webbrowser

PORT = 8787
os.chdir(os.path.dirname(os.path.abspath(__file__)))


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def log_message(self, *a):
        pass


with socketserver.TCPServer(('127.0.0.1', PORT), Handler) as httpd:
    url = 'http://127.0.0.1:%d/index.html' % PORT
    print('TOEFL Writing practice: %s' % url)
    print('Ctrl-C to stop.')
    try:
        webbrowser.open(url)
    except Exception:
        pass
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print()
