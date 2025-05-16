import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class ProductosPage extends StatefulWidget {
  const ProductosPage({super.key});

  @override
  _ProductosPageState createState() => _ProductosPageState();
}

class _ProductosPageState extends State<ProductosPage> {
  List productos = [];

  @override
  void initState() {
    super.initState();
    fetchProductos();
  }

  Future<void> fetchProductos() async {
    final response = await http.get(Uri.parse('http://10.0.2.2:3000/productos'));
    if (response.statusCode == 200) {
      setState(() {
        productos = jsonDecode(response.body);
      });
    } else {
      print('Error al obtener productos: ${response.body}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Productos")),
      body: ListView.builder(
        itemCount: productos.length,
        itemBuilder: (context, index) {
          final producto = productos[index];
          return ListTile(
            leading: Icon(Icons.shopping_bag),
            title: Text(producto['nombre']),
            subtitle: Text("Cantidad: ${producto['cantidad']} - Precio venta: \$${producto['precio_venta']}"),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Aquí se podría ir a una pantalla para agregar producto
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
