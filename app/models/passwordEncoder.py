from hashlib import md5


def encoder(conteudo):
    return md5(conteudo.encode('utf-8')).hexdigest()