
#!/bin/sh

if [ $# -ne 0 ]; then
    exec "$@"
else
    if [ -z ${LOCATION} ]; then
        echo "LOCATION env var not set. Exiting."
        exit 2
    fi

    cat /etc/nginx/nginx.conf | envsubst '${LOCATION}' > /tmp/nginx.conf
    mv /tmp/nginx.conf /etc/nginx/nginx.conf

    exec nginx -g "daemon off;"
fi