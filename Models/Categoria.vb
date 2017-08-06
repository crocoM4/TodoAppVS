Imports System.ComponentModel.DataAnnotations
Imports Parse
Public Class Categoria
    Dim mId As String
    Dim mNome As String

    Public Property Id As String
        Get
            Return mId
        End Get
        Set(value As String)
            mId = value
        End Set
    End Property

    <StringLength(60, MinimumLength:=3)>
    Public Property Nome As String
        Get
            Return mNome
        End Get
        Set(value As String)
            mNome = value
        End Set
    End Property


    Public Shared Function getCategoriaFromParseObject(ByVal obj As ParseObject) As Categoria
        Dim cat As Categoria = New Categoria
        cat.Id = obj.ObjectId
        cat.Nome = obj.Get(Of String)("nome")
        Return cat
    End Function

    Public Shared Function getListaCategorieFromListaParseObject(ByVal lista As List(Of ParseObject)) As List(Of Categoria)
        Dim catList As List(Of Categoria) = New List(Of Categoria)
        For Each o In lista
            catList.Add(getCategoriaFromParseObject(o))
        Next
        Return catList
    End Function


End Class
