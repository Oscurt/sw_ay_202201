# Guia Docker

[Volver](https://github.com/Oscurt/sw_ay_202201)

## Instalar

- [Video pro][https://www.youtube.com/watch?v=CV_Uf3Dq-EU]
- [Windows][https://docs.docker.com/docker-for-windows/install/]
- [MacOS][https://docs.docker.com/docker-for-mac/install/]
- [Ubuntu][https://docs.docker.com/engine/install/ubuntu/]

En el caso de windows y macOS podemos instalar la version desktop que provee docker, este tiene un instalador simple para el caso de ubuntu se deben ejecutar los siguientes comandos:

```sh
    sudo apt-get update
    sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo \
    "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Para ubuntu debemos instalar docker-compose para el uso de los archivos de este repositorio.

- [docker compose][https://docs.docker.com/compose/install/]

```sh
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

## Problemas

En caso de problemas con windows recordar lo siguiente:

- Habilitar el subsistema de windows, para ello debemos ir a caractericticas de windows y activarlo.
- [Instalar wsl][https://docs.microsoft.com/en-us/windows/wsl/install]
- [Actualizar a wsl2][https://docs.docker.com/desktop/windows/wsl/]

## Comandos

- docker build: Sirve para crear una imagen a partir de un dockerfile, para ello podemos usar el argumento -t para darle un nombre y debemos especificar la ruta del dockerfile.
- docker run: Sirve para crear un contenedor a partir de una imagen, podemos usar el comando -it para la interactividad o -d para ejecutar en modo demonio, ademas debemos especificar el nombre de la imagen a utilizar.
- docker ps: Sirve para listar los contenedores encendidos, podemos usar -a para listar todos los contenedores.
- docker images: Sirve para listar las imagenes.

Los siguientes comandos se debe especificar el contenedor a utilizar (ya sea nombre o id).

- docker start: Sirve para iniciar/prender un contendor.
- docker stop: Sirve para detener/apagar un contenedor.
- docker exec: Sirve para ejecutar un "programa" de un contenedor.
- docker rm: Sirve para eliminar un contenedor.
- docker rmi: Sirve para eliminar una imagen.