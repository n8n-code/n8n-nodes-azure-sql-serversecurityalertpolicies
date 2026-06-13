import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlServersecurityalertpoliciesApi implements ICredentialType {
        name = 'N8nDevAzureSqlServersecurityalertpoliciesApi';

        displayName = 'Azure SQL Serversecurityalertpolicies API';

        icon: Icon = { light: 'file:../nodes/AzureSqlServersecurityalertpolicies/azure-sql-serversecurityalertpolicies.png', dark: 'file:../nodes/AzureSqlServersecurityalertpolicies/azure-sql-serversecurityalertpolicies.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Serversecurityalertpolicies API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
