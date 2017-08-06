Imports System.Web.Mvc
Imports Parse

Namespace Controllers
    Public Class TodoController
        Inherits Controller

        Public Sub New()

        End Sub

        ' GET: Todo
        Function Index() As ActionResult
            Return View()
        End Function


        '<OutputCache(Location:=OutputCacheLocation.None)>
        'Function GetAllCategorie() As ActionResult
        '    Dim query = New ParseQuery(Of ParseObject)("categorie")
        '    Dim task = query.FindAsync()
        '    Dim c As List(Of Categoria)
        '    Try
        '        task.Wait()
        '        Dim res = New List(Of ParseObject)(task.Result)
        '        c = Categoria.getListaCategorieFromListaParseObject(res)
        '        Return Json(c, JsonRequestBehavior.AllowGet)
        '    Catch ex As Exception
        '        Return Json(New With {.errore = "errore durante il caricamento delle categorie"}, JsonRequestBehavior.AllowGet)
        '    End Try
        'End Function


        ' ASINCRONO

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function GetAllCategorie() As Threading.Tasks.Task(Of ActionResult)
            Dim query = New ParseQuery(Of ParseObject)("categorie")
            Dim res = New List(Of ParseObject)(Await query.FindAsync())
            Try

                Dim c = Categoria.getListaCategorieFromListaParseObject(res)
                Return Json(c, JsonRequestBehavior.AllowGet)
            Catch ex As Exception
                Return Json(New With {.errore = "errore durante il caricamento delle categorie"}, JsonRequestBehavior.AllowGet)
            End Try
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function GetArgomentiByCategoria(ByVal categoria As Categoria) As Threading.Tasks.Task(Of ActionResult)
            Dim query = New ParseQuery(Of ParseObject)("argomenti")
            If categoria.Id IsNot Nothing Then
                query = query.WhereEqualTo("categoria", categoria.Id)
            End If
            Dim c As List(Of Argomento)
            Try
                Dim res = New List(Of ParseObject)(Await query.FindAsync())
                c = Argomento.getListaArgomentiFromListaParseObject(res)
                Return Json(c, JsonRequestBehavior.AllowGet)
            Catch ex As Exception
                Return Json(New With {.errore = "errore durante il caricamento dei dati"}, JsonRequestBehavior.AllowGet)
            End Try

        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function CancellaCategoria(ByVal categoria As Categoria) As Threading.Tasks.Task(Of ActionResult)

            Try
                Dim obj As ParseObject = ParseObject.CreateWithoutData("categorie", categoria.Id)
                Await obj.DeleteAsync()
                Return Json(New With {.result = "true"}, JsonRequestBehavior.AllowGet)
            Catch ex As Exception
                Return Json(New With {.errore = "Errore durante la cancellazione della categoria"}, JsonRequestBehavior.AllowGet)
            End Try


        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function AggiungiCategoria(ByVal nomeCategoria As String) As Threading.Tasks.Task(Of ActionResult)
            Dim pObjCategoria As ParseObject = New ParseObject("categorie")
            pObjCategoria("nome") = nomeCategoria
            Try

                Await pObjCategoria.SaveAsync()

                Dim queryObj As ParseQuery(Of ParseObject) = New ParseQuery(Of ParseObject)("categorie")
                queryObj = queryObj.WhereEqualTo("nome", nomeCategoria)

                Dim obj = Await queryObj.FirstAsync()

                Dim c = Categoria.getCategoriaFromParseObject(obj)

                Return Json(c, JsonRequestBehavior.AllowGet)

            Catch ex As Exception
                Return Json(New With {.errore = "errore durante il caricamento delle categorie"}, JsonRequestBehavior.AllowGet)
            End Try
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function AggiungiArgomento(ByVal titoloArgomento As String, ByVal idCategoria As String) As Threading.Tasks.Task(Of ActionResult)

            Dim categoriaCollegata As ParseObject = ParseObject.CreateWithoutData("categorie", idCategoria)

            Dim pObjArgomento As ParseObject = New ParseObject("argomenti")
            pObjArgomento("titolo") = titoloArgomento
            pObjArgomento("descrizione") = ""
            pObjArgomento("completato") = False
            pObjArgomento("categoria") = categoriaCollegata
            Try
                Await pObjArgomento.SaveAsync()
                Return Json(New With {.result = "true"}, JsonRequestBehavior.AllowGet)
            Catch ex As Exception
                Return Json(New With {.errore = "errore durante il caricamento delle categorie"}, JsonRequestBehavior.AllowGet)
            End Try
        End Function

    End Class
End Namespace