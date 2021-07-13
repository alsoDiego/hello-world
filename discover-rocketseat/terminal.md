```sh
#sintaxe básica: comando opções argumentos
ls -lh /usr/bin
```

```sh
# tab para autocompletar: iniciar o comando e pressionar tab
```

```sh
# Ctrl +
    # A - cursor no início da linha
    # E - final da linha
    # U - limpa a linha
    # K - limpa desde o cursor até o fim da linha
    # L - limpa a tela mantendo a linha de comando
```

```sh
# Manual
# man + [comand]: man ls
```

```sh
# Buscar comandos por tema
# apropos "[tema]": apropos "directory"
```

```sh
# listar diretório desde a raiz
# pwd
```
```sh
# criar diretório
# mkdir: mkdir folder1/
    # criar diretórios aninhados
    # mkdir -p (parent): mkdir -p folder1/folder1.1/
```

```sh
# criar arquivos
# touch: touch file.txt
```

```sh
# arquivos ou pastas (adicionar -r)
    # copiar: cp
    # mover: mv
    # remover: rm (-f para forçar)
```

```sh
# Encontrar arquivos <f> ou diretórios <d>
# find path/ arg [expression]
    # arg: -type d | -type f
    # [expression]: -name "anythign I wnat in the name"
    # ex: find /myfolder -type f -name "music.mp3"
```

```sh
# ver conteúdos de arquivos
# less - abre o arquivos
# cat - printa no terminal o conteúdo
```