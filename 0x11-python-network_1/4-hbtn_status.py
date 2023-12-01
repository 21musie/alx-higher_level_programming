#!/usr/bin/python3
""" now we are going to use requests package
"""
if __name__ == '__main__':
    import requests
    r = requests.get("https://alx-intranet.hbtn.io/status")
    typ = type(r.text)
    con = r.text
    print("Body response:\n\t- type: {}\n\t- content: {}".format(typ, con))
