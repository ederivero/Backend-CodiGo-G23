from os import environ
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from smtplib import SMTP


def enviar_correo(destinatarios: list[str], titulo: str, cuerpo: str):
    # Si recibimos una lista de destinatarios, estos no pueden enviarse como lista, sino que debemos de concatenarlos en un string
    destinatarios = ','.join(destinatarios)

    emailEmisor = environ.get('EMAIL_EMISOR')
    passwordEmisor = environ.get('PASSWORD_EMISOR')
    correo = MIMEMultipart()

    # configuramos el titulo del correo
    correo['Subject'] = titulo
    correo['From'] = emailEmisor
    correo['To'] = destinatarios

    # ahora configuramos el contenido del correo
    texto = MIMEText(cuerpo, 'plain')

    correo.attach(texto)

    # Ahora configuramos nuestro servidor de correos (SMTP)
    # El puerto de los servidores de correo SIEMPRE ES EL 587
    # SERVICIO          SERVIDOR
    # outlook > outlook.office365.com
    # hotmail > smtp.live.com
    # gmail   > smtp.gmail.com
    # icloud  > smtp.mail.me.com
    # yahoo   > smtp.mail.yahoo.com
    servidorCorreo = SMTP('smtp.gmail.com', 587)
    servidorCorreo.starttls()

    # ahora iniciamos sesion en el servidor de correos para autenticarnos
    servidorCorreo.login(emailEmisor, passwordEmisor)

    servidorCorreo.sendmail(from_addr=emailEmisor,
                            to_addrs=destinatarios, msg=correo.as_string())

    servidorCorreo.quit()
