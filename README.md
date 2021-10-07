# Fuck you server

Fuck off server is a fully functional async webchat application written in django using django channels



## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install the app.
It uses docker image of redis on port 6379 so don't forget to pull the redis image.

```bash
cd fserver/
docker run -p 6379:6379 -d redis:5
pip install -r fserver/requirements.txt
```

## Usage

```bash
python manage.py runserver
python manage.py migrate
```
When the django server is up and running go to [http://127.0.0.1:8000/chat/NAME_OF_YOUR_ROOM_HERE](http://127.0.0.1:8000/chat/NAME_OF_YOUR_ROOM_HERE)
and just start typing away!
When you send ```send_fuck``` you will recieve a surprise in the other window in your browser!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate or write any for that matter.

## License
[MIT](https://choosealicense.com/licenses/mit/)
