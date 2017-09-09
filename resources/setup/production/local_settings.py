DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ns6rg9xq=5fpc%3!5)d=w&jjsgxo)+9y_6cr2!ju^25iawj0))'

ALLOWED_HOSTS = ['']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
        'CONN_MAX_AGE': 600,
    },
}