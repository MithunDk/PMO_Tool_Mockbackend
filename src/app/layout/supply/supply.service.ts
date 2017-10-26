import { Supply } from '../../models/supply.model';

export class SupplyService {
    /**
     * GetSupply* 
     */
    public GetSupply(demandId: number): Supply[] {
        return [
            { EnterpriseID:'user1@accenture.com',Level:'10',Location:'Chennai',PersonnelNo:100,ResourceName:'user 1',SourcingStage:'stage',SourcingType:'type' },
            { EnterpriseID:'user2@accenture.com',Level:'9',Location:'Chennai',PersonnelNo:101,ResourceName:'user 2',SourcingStage:'stage',SourcingType:'type' },
            { EnterpriseID:'user3@accenture.com',Level:'10',Location:'Chennai',PersonnelNo:102,ResourceName:'user 3',SourcingStage:'stage',SourcingType:'type' },
        ];
    }
}