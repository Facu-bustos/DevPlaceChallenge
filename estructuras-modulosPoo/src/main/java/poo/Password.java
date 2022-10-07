package poo;

import java.security.SecureRandom;

public class Password {
    private Integer longitud;
    private String pass;

    Password(){
    this.longitud = 8;
    }

    Password(Integer longitud){
        this.longitud = longitud;
    }

    public String getPass() {
        return pass;
    }

    public Integer getLongitud() {
        return longitud;
    }

    public void setLongitud(Integer longitud) {
        this.longitud = longitud;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public boolean esFuerte()
    {
        boolean esFuerte = false;
        int mayus=0;
        int minus=0;
        int numeros=0;

        for (int i=0; i< getPass().length();i++){

            if(Character.isUpperCase(getPass().charAt(i))){
                mayus++;
            }
            if (Character.isLowerCase(getPass().charAt(i))){
                minus++;
            }
            if (Character.isDigit(getPass().charAt(i))){
                numeros++;
            }
        }
        if(mayus > 2){
            if (minus > 1)
                if (numeros > 3)
                    esFuerte=true;
        }
        return esFuerte;
    }

    public void generarPassword() {
        // Puede personalizar los personajes que desea agregar a
        // las cadenas al azar
        String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
        String CHAR_UPPER = CHAR_LOWER.toUpperCase();
        String NUMBER = "0123456789";

        String DATA_FOR_RANDOM_STRING = CHAR_LOWER + CHAR_UPPER + NUMBER;
        SecureRandom random = new SecureRandom();

        if (this.getLongitud() < 1) throw new IllegalArgumentException();

        StringBuilder sb = new StringBuilder(this.getLongitud());

        for (int i = 0; i < this.getLongitud(); i++) {
            // 0-62 (exclusive), retornos aleatorios 0-61
            int rndCharAt = random.nextInt(DATA_FOR_RANDOM_STRING.length());
            char rndChar = DATA_FOR_RANDOM_STRING.charAt(rndCharAt);

            sb.append(rndChar);
        }

       this.pass = sb.toString();
    }
}
