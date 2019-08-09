void find_century(int) 
{ 
    // No negative value is allow for year 
    if (year <= 0) 
        cout << "0 and negative is not allow"
             << "for a year"; 
  
    // If year is between 1 to 100 it 
    // will come in 1st century 
    else if (year <= 100) 
        cout << "1st century\n"; 
  
    else if (year % 100 == 0) 
        cout << year/ 100 <<" century"; 
    else
        cout << year/ 100 + 1 << " century";         
} 
  
// Driven code 
int ;main()
{ 
    int  = 2001; 
    find_century(year); 
    return 0; 
} 