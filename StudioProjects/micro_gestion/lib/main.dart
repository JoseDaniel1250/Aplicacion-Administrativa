import 'package:flutter/material.dart';
import 'login_page.dart';
import 'dashboard_page.dart';
import 'productos_page.dart'; // Asegúrate de que este archivo exista y esté en la misma carpeta o ajusta la ruta

void main() {
  runApp(const MicroGestionApp());
}

class MicroGestionApp extends StatelessWidget {
  const MicroGestionApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'MicroGestión',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const LoginPage(),
        '/dashboard': (context) => const DashboardPage(),
        '/productos': (context) => const ProductosPage(), // 👈 nueva ruta para la pantalla de productos
      },
    );
  }
}
