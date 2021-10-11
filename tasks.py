import os
from invoke import task

@task
def pep8(ctx):
    msg = 'PEP8 passed'
    cmd = "docker-compose exec backend pycodestyle fserver/apps --max-line-length=140 --exclude='*/migrations/'"
    ctx.run(cmd, pty=True)
    print(msg)