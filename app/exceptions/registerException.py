class RegisteredUser(Exception):
    
    def __init__(self, mensagem):
        self.mensagem = mensagem
        

    def __str__(self):
        return "Error: {}".format(self.mensagem)


class RegisteredEmail(Exception):
    
    def __init__(self, mensagem):
        self.mensagem = mensagem
        

    def __str__(self):
        return "Error: {}".format(self.mensagem)

