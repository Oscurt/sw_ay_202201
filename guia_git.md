# Guia GIT

[Volver](https://github.com/Oscurt/sw_ay_202201)

## Instalar

- [Windows][win]
- [MacOS][mac]
- [Linux/Unix][linux]


## Comandos

- git init: Sirve para iniciar git en un proyecto.
- git add archivos: Sirve para agregar archivos al repositorio (actualizar cambios o subir nuevos archivos), este recibe como parametro el nombre del o los archivos.
- git commit -m "escribe tu msg": Sirve para hacer el cambio y agregarlo al historial junto con un comentario.
- git push: Sirve para subir los cambios al repositorio (se puede especificar la branch, ejemplo: git push origin testing).
- git pull: Sirve para descargar los ultimos cambios realizados al repositorio.
- git branch: Sirve para ver la rama actual o crear una nueva recibiendo el parametro el nombre de esta.
- git checkout rama: Sirve para cambiar la rama actual de trabajo. 

## Enlazar con github

Para un repositorio nuevo usaremos los siguientes comandos para subir el archivo readme al repositorio git y github:

```sh
    git init
    git add README.md 
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/TU_USUARIO/TU-REPOSITORIO.git
    git push -u origin main
```

Si ya existe el repositorio git simplemente usaremos:

```sh
    git remote add origin https://github.com/TU_USUARIO/TU-REPOSITORIO.git
    git branch -M main
    git push -u origin main
```

[win]: <https://git-scm.com/download/win>
[mac]: <https://git-scm.com/download/mac>
[linux]: <https://git-scm.com/download/linux>