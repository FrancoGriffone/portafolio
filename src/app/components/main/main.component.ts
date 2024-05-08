import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  proyectos: any[] = [
    {
      nombre: 'Guía de talles',
      imagen: 'guiaTalles.gif',
      descES: 'Con la idea de generar una guía para los distintos talles de diferentes productos, la empresa solicitó desarrollar esta app. Al estar limitada por su servicio de ERP, ya que las guías deben ser cargadas en formato CSV, se toma de una base de datos SQL el tipo de producto, el género y la marca (dado que puede haber diferencias según las mismas). Esto devolverá una tabla de AG GRID y habilitará un botón para descargar el archivo en CSV con el formato solicitado por el ERP.',
      descEN: 'With the idea of creating a guide for the different sizes of various products, the company requested the development of this app. Being limited by its ERP service, since the guides must be uploaded in CSV format, the type of product, gender, and brand are taken from an SQL database (as there may be differences according to them). This will return an AG GRID table and enable a button to download the file in CSV format as requested by the ERP.'
    },
    {
      nombre: 'DOCS',
      imagen: 'docs.gif',
      descES: 'Utilizado como un depósito de archivos dividido por secciones, evitando que los mismos se pierdan o bien con la idea de compartirlos entre varios usuarios sin necesidad de que dicho archivo esté en todos los equipos. Cada sección puede ver sus archivos y asignarlos a otros grupos para que también pueda verlos (el administrador, pese a no estar asignado, siempre podrá ver los documentos). Estos se cargan descomponiendo el archivo a BASE64 para subirlo formato JSON. En un principio, al ser un proyecto personal se realizó en FIREBASE, pero como era una versión gratuita el string del archivo BASE64 superaba el límite de la plataforma. La empresa solicitó pasar dichos datos al servidor propio para poder usar la aplicación, por lo que se desarrollo la capa de backend en C# y .NET, mientras que las tablas se depositaron en SQL. Posteriormente se añadió la posibilidad de crear documentos personalizados, que tienen el mismo formato pero datos diferentes según el caso. Estos se realizan con PDF MAKE con los datos que el usuario le pase.',
      descEN: 'Used as a file repository divided into sections, this application prevents files from getting lost and allows for easy sharing among multiple users without the need for each file to be present on every device. Each section can view its own files and assign them to other groups so that they can also access them (even if not explicitly assigned, the administrator will always have access to the documents). Files are uploaded by breaking them down into BASE64 format and storing them as JSON. Initially, as a personal project, it was developed using Firebase. However, due to limitations in the free version of Firebase (where the BASE64 string exceeded the platform’s limit), the company requested migrating the data to their own server. Consequently, a backend layer was developed in C# and .NET, while the tables were stored in an SQL database. Later, the application was enhanced to allow the creation of customized documents with the same format but different data depending on the use case. These custom documents are generated using PDF MAKE with the data provided by the user.'
    },
    {
      nombre: 'Problemas con impresoras',
      imagen: 'problemasImpresoras.gif',
      descES: 'Se inició como una guía de documentación sobre los distintos problemas que tenían las impresoras ZEBRA de la empresa. En un principio, al ser un proyecto personal se realizó en FIREBASE. La empresa solicitó pasar dichos datos al servidor propio para poder usar la aplicación, por lo que se desarrollo la capa de backend en C# y .NET, mientras que las tablas se depositaron en SQL.',
      descEN: 'It started as a documentation guide for the various issues encountered with the ZEBRA printers in the company. Initially, as a personal project, it was developed using Firebase. However, the company requested migrating this data to their own server in order to use the application. As a result, the backend layer was developed in C# and .NET, while the tables were stored in an SQL database.'
    },
    {
      nombre: 'Reclamos',
      imagen: '',
      descES: 'Esta aplicación permite una gestión simple para los reclamos sobre los productos del local. Presenta una conexión a una base de datos SQL en donde se realizan todas las operaciones CRUD. RECLAMOS permite el guardar el estado de una reclamo, dando curso según corresponda, haciendo un seguimiento de dicho problema hasta su resolución. En este caso concreto, la app de la empresa toma reclamos tanto de clientes como internos (mercadería que se daña por un exhibición, por ejemplo), y dentro de los reclamos de cliente los subdivide en aquellos que son estrictamente de mercadería y otros que son por motivos varios (por ejemplo una queja porque la tarjeta de crédito le cobró dos veces una compra). Veremos dichos reclamos agrupados, ya sea por estados o bien por unidad de negocio, permitiendo un rápido y sectorizado acceso a la información.',
      descEN: 'This application allows simple management of product-related claims within the store. It connects to an SQL database where all CRUD (Create, Read, Update, Delete) operations take place. The ‘RECLAMOS’ app enables the tracking of claim statuses, following them through to resolution. In this specific case, the company’s app handles claims from both customers and internal sources (such as damaged merchandise due to display issues). Within customer claims, it further categorizes them into strictly merchandise-related issues and those arising from various reasons (for instance, a complaint about being charged twice for a purchase by a credit card). We’ll display these claims grouped by status or business unit, allowing quick and targeted access to the information.'
    },
    {
      nombre: 'Módulo de inventario',
      imagen: 'inventario.gif',
      descES: 'El MÓDULO DE INVENTARIO se originó con la idea de realizar controles exactos sobre la mercadería existente en una unidad de negocio. Al crear un INVENTARIO, seteamos la marca o marcas y el local que queremos controlar. Esto nos devolverá de una base de datos SQL los productos que existentes y códigos activos para poder posteriormente COMENZAR UNA TAREA. Acá lo que haremos será colocar nombre a una UBICACIÓN para subdividir dicho INVENTARIO, fichando posteriormente los códigos de barra de los productos. Si bien la app se realizó para utilizarse en Smartphones de ZEBRA que tienen integrado un laser con lector de códigos de barras, se puede usar desde una PC sin problemas. Finalizado el INVENTARIO, podemos consultar la LISTA DE INVENTARIO o ANALIZAR UN INVENTARIO, para ver en detalle los productos que agregamos.',
      descEN: 'The MÓDULO DE INVENTARIO was created with the idea of performing precise controls over the existing merchandise in a business unit. When creating an INVENTARIO, we set the brand or brands and the location we want to monitor. This retrieves existing product data and active codes from an SQL database, allowing us to subsequently COMENZAR UNA TAREA. Next, we assign a name to a UBICACIÓN to subdivide the INVENTARIO, and then we scan the product barcodes. Although the app was originally designed for use on ZEBRA Smartphones, which have an integrated laser barcode reader, it can also be used on a PC without any issues. Once the INVENTARIO is complete, we can consult the LISTA DE INVENTARIO or ANALIZAR UN INVENTARIO to see the details of the products we’ve added.'
    },
    {
      nombre: 'Actualizar ecommerce',
      imagen: 'actEcommerce.gif',
      descES: 'Se originó con la idea de modificar los estados tanto del stock como del precio de los productos. Existen tres muy similares, dependiendo de la unidad de negocio, aunque la vista que vemos corresponde a una de ellas que es la unidad de negocio mayor y por ende administradora (con acceso a cambiar precios y stock de las otras webs directamente desde esta). La empresa tenía el inconveniente que su servicio ERP provisto por otra empresa en donde los cambios se realizaban pero no se enviaban a impactar al sistema, siendo que esto último se realizaba manualmente mediante un CSV cargado en el ERP. Al no obtener respuesta de dicha empresa, tomando los datos de la base de datos SQL, recuperamos dichos datos y los enviamos directamente desde esta web, que procesa producto por producto de manera individual asegurándose que cada uno tenga su cambio.',
      descEN: 'It originated with the idea of modifying the status of both the stock and the price of products. There are three very similar ones, depending on the business unit, although the view we see corresponds to one of them, which is the largest business unit and therefore the administrator (with access to change prices and stock of the other websites directly from this one). The company had the inconvenience that its ERP service provided by another company where changes were made but not sent to impact the system, as this was done manually through a CSV loaded in the ERP. Not getting a response from said company, taking the data from the SQL database, we retrieved such data and sent it directly from this website, which processes product by product individually, ensuring that each one has its change.'
    },
    {
      nombre: 'Conciliacion de proveedores',
      imagen: 'conciliacionProv.gif',
      descES: 'Este proyecto se inició con la idea de documentar los pagos realizados a los distintos proveedores de la empresa, ya sea de mercadería o de otros servicios. Recibiendo los datos de un llamado HTTP al servidor, obtenemos todas las conciliaciones cargadas en una AG GRID. Al presionar sobre una línea, se abrirá un DIALOG que muestra diferentes entradas con los estados que fue teniendo dicha conciliación, que al igual que la AG GRID principal, permite entrar y ver el detalle de dicho estado, así como descargar los archivos que se pueden haber cargado en el mismo. El usuario tiene la posibilidad de crear estados diferentes a los que vienen por defecto para marcar las conciliaciones como desee. Posteriormente la app fue adquiriendo otras herramientas que utiliza el sector de contabilidad, como los relativos al control de comprobantes de cada proveedor o la posibilidad de verificar los comprobantes cargados en el sistema, la posibilidad de realizar formateos sencillos de un Excel, la carga de el documento Padrón LUA IIBB, y la carga del Libro IVA Digital (estos dos últimos, necesarios en la contabilidad Argentina)',
      descEN: 'This project was initiated with the idea of documenting payments made to various suppliers of the company, whether for merchandise or other services. By receiving data from an HTTP call to the server, we retrieve all reconciliations loaded into an AG GRID. When clicking on a row, a DIALOG opens, displaying different entries representing the states that the reconciliation has gone through. Similar to the main AG GRID, this DIALOG allows users to enter and view the details of each state, as well as download any files that may have been uploaded. Users also have the ability to create custom states beyond the default ones, allowing them to label reconciliations as desired. Subsequently, the app acquired additional tools used by the accounting department. These include features related to verifying receipts from each supplier, checking uploaded receipts in the system, performing simple Excel formatting, uploading the ‘Padrón LUA IIBB’ document, and handling the ‘Libro IVA Digital’ (both of which are essential for accounting in Argentina).'
    },
    {
      nombre: 'Tickets de regalo',
      imagen: 'ticketsRegalo.gif',
      descES: 'Una app sencilla, cuya única funcionalidad es recibir un número de pedido y generar una copia PDF del mismo. Recibe por parte del usuario un número y con base a este realiza una petición API al servidor que devuelve los datos de dicho ticket. Una vez tenemos los datos, genera un PDF con PDF MAKE de una forma específica agrupando los datos que devolvió el llamado HTTP.',
      descEN: 'A simple app, whose sole functionality is to receive an order number and generate a PDF copy of it. It receives a number from the user and based on this, it makes an API request to the server that returns the data of that ticket. Once we have the data, it generates a PDF with PDF MAKE in a specific way, grouping the data returned by the HTTP call.'
    }
  ]
}
