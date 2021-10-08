FROM python:3.9-slim-buster AS base

LABEL maintainer Jacob <jakubsopel7@gmail.com>

ENV PYTHONBUFFERED=1

WORKDIR /code

RUN mkdir -p /usr/share/man/man1 /usr/share/man/man7 &&\
    apt-get update &&\
    apt-get install --yes --no-install-recommends \
    libpq-dev \
    gcc \
    file \
    make \
    libc-dev &&\
    rm -rf /var/lib/apt/* &&\
    apt-get clean

ADD ./requirements/base.txt /tmp
RUN pip3 install --no-cache-dir --upgrade pip &&\
    pip3 install --no-cache-dir -r /tmp/base.txt

EXPOSE 8000

FROM base AS dev

COPY ./ ./

FROM base AS dist

COPY ./ ./