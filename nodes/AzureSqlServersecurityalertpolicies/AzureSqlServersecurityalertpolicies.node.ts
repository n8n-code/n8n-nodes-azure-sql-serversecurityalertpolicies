import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlServersecurityalertpolicies implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Serversecurityalertpolicies',
                name: 'N8nDevAzureSqlServersecurityalertpolicies',
                icon: { light: 'file:./azure-sql-serversecurityalertpolicies.png', dark: 'file:./azure-sql-serversecurityalertpolicies.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure SQL Database RESTful API manages databases via CRUD operations.',
                defaults: { name: 'Azure SQL Serversecurityalertpolicies' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlServersecurityalertpoliciesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
