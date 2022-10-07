package estructuraDeDatos;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/*1)Implementar una función que recibe una lista de enteros L y un número entero n de forma
        que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
        valor*/
public class Lista {
    public static void main(String[] args) {
        List<Integer> lista = new ArrayList<>();

        lista.add(0);
        lista.add(1);
        lista.add(2);
        lista.add(3);

        //Borrar numero de lista
/*        System.out.println(Arrays.toString(lista.toArray()));

        lista = borrarNumeroDeLista(lista, 6);

        System.out.println(Arrays.toString(lista.toArray()));*/

        //Suma recuriva de lista
        System.out.println(sumaRecursiva((ArrayList<Integer>) lista, lista.size()-1));

    }

    private static List<Integer> borrarNumeroDeLista(List<Integer> lista, Integer numero){
        List<Integer> aux = new ArrayList<>();
        aux = lista;
        if(aux.contains(numero)){
            aux.remove(numero);
        }else{
            System.out.println("El numero: " + numero.toString() + " no se encuentra en la lista" );
        }
        return lista;
    }


    private static int sumaRecursiva(ArrayList<Integer> listaEnteros, int size){//numero es 0 de base
        int dim= size;
        int rta;

        if (dim==0){
            return listaEnteros.get(dim);
        }else {
            rta= listaEnteros.get(dim) + sumaRecursiva(listaEnteros, dim-1);
        }
        return rta;
    }

}

