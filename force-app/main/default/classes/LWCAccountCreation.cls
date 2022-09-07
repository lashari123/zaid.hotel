public with sharing class LWCAccountCreation {
   @AuraEnabled 
    public static string acct(string n)
    {
        Account a = new Account (name=n);
        insert a;
        if (a.Id !=NULL)
        {
            return 'success';
        }
        else
        {
            return 'error';
        }
        
    }
         
        }