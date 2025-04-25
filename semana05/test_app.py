from flask import Flask


# Este cliente lo pasaremos mediante la configuracion de nuestro pytest
def test_inicio(client: Flask):
    res = client.get('/')
    data = res.get_json()

    assert res.status_code == 200
    assert data['message'] == 'Bienvenido a mi API'
